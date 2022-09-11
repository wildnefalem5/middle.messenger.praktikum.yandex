import { Router } from "./../../utils/router";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import { MessageForm } from "./components/message-form/index";
import { Field } from "./../../components/field/index";
import { Textarea } from "./../../components/textarea/index";
import { checkMessage } from "./../../utils/validate";
import { Button } from "./../../components/button/index";
import "../../styles.scss";
import template from "./template.hbs";
import Block from "../../utils/block";

interface ChatPageProps {}

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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          checkMessage(e.target.value) ? "" : "Wrong message"
        );
      },
    },
  }),
});

const accountButton = new Button("button", {
  text: "Account",
  attr: {
    class: "chat-page__chat-header-account-button",
    type: "button",
  },
  events: {
    click: () => {
      const router = new Router("#root");

      router.go("/account");
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
    submit: (e: EventType) => {
      e.preventDefault();

      getDataFromForm(e.target);
    },
  },
});

export class ChatPageComponent extends Block<ChatPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

export const ChatPage = new ChatPageComponent("div", {
  messageForm,
  accountButton,
});
