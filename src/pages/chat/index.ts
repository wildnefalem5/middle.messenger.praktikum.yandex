import { Router } from "../../utils/router/router";
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
    class: "chat-page__chat-header-account-button",
    type: "button",
  },
  events: {
    click: () => {
      const router = new Router("#root");

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

      getDataFromForm(form);
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
