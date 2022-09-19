import { ChatHeader } from "./components/chat-header/index";
import { StoreEvents } from "./../../utils/store/store";
import { ChatCreatorForm } from "./components/chat-creator-form/index";
import { Input } from "./../../components/input/index";
import { chatController } from "./../../api/controller/chat-controller";
import { router } from "../../utils/router/router";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import { MessageForm } from "./components/message-form/index";
import { Field } from "./../../components/field/index";
import { Textarea } from "./../../components/textarea/index";
import { checkMessage } from "./../../utils/validate";
import { Button } from "./../../components/button/index";
import "../../styles.scss";
import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface ChatPageProps {}

const chatHeader = new ChatHeader("div", {
  attr: {
    class: "chat-page__chat-header-title",
  },
  text: "",
});

const submitButton = new Button("button", {
  text: "Send",
  attr: {
    class: "button chat-page__chat-form-button",
    type: "submit",
  },
});

const messageField = new Field("label", {
  attr: {
    class: "field",
  },
  input: new Textarea("div", {
    placeholder: "Enter your message",
    name: "message",
    type: "text",
    attr: {
      class: "chat-page__chat-form-input",
    },
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = checkMessage(input.value) ? "" : "Wrong message";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const accountButton = new Button("button", {
  text: "Account",
  attr: {
    class: "button chat-page__chat-header-account-button",
    type: "button",
  },
  events: {
    click: () => {
      router.go("/settings");
    },
  },
});

const messageForm = new MessageForm("form", {
  messageField,
  submitButton,
  attr: {
    class: "chat-page__chat-form",
  },
  events: {
    submit: (e: Event) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const data = getDataFromForm(form);

      chatController.sendMessage(data.message);
    },
  },
});

const chatCreatorInput = new Input("label", {
  placeholder: "Chat name",
  name: "title",
  type: "text",
  attr: {
    class: "",
  },
});

const chatCreatorButton = new Button("button", {
  text: "Create",
  attr: {
    class: "button",
    type: "submit",
  },
  events: {
    click: () => {},
  },
});

const chatCreatorForm = new ChatCreatorForm("form", {
  chatCreatorInput,
  chatCreatorButton,
  attr: {
    class: "chat-page__chat-creator-form",
  },
  events: {
    submit: (e: Event) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;
      const data = getDataFromForm(form);

      chatController.createChat({ data });
    },
  },
});

export class ChatPageComponent extends Block<ChatPageProps> {
  constructor() {
    super("div", {
      messageForm,
      accountButton,
      chatCreatorForm,
      chatHeader,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLElement;

          if (target.hasAttribute("data-chat-id")) {
            const chatId = target.dataset.chatId;

            chatHeader.setProps({ text: target.dataset.chatTitle });

            if (chatId) {
              chatController.startMessages(+chatId);
            }
          }
        },
      },
    });

    chatController.loadMoreChat();

    this._store.on(StoreEvents.UPDATED, () => {
      const state = this._store.getState();

      const { chats, messages } = state;

      this.setProps({ chats, messages });
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}

export const ChatPage = new ChatPageComponent();
