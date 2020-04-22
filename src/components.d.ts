/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NwcProgressBar {
        "value": any;
    }
    interface NwcSubmit {
        "loading": boolean;
        "value": string;
    }
    interface NwcSurveyPart {
        "admin": boolean;
        "question": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNwcProgressBarElement extends Components.NwcProgressBar, HTMLStencilElement {
    }
    var HTMLNwcProgressBarElement: {
        prototype: HTMLNwcProgressBarElement;
        new (): HTMLNwcProgressBarElement;
    };
    interface HTMLNwcSubmitElement extends Components.NwcSubmit, HTMLStencilElement {
    }
    var HTMLNwcSubmitElement: {
        prototype: HTMLNwcSubmitElement;
        new (): HTMLNwcSubmitElement;
    };
    interface HTMLNwcSurveyPartElement extends Components.NwcSurveyPart, HTMLStencilElement {
    }
    var HTMLNwcSurveyPartElement: {
        prototype: HTMLNwcSurveyPartElement;
        new (): HTMLNwcSurveyPartElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "nwc-progress-bar": HTMLNwcProgressBarElement;
        "nwc-submit": HTMLNwcSubmitElement;
        "nwc-survey-part": HTMLNwcSurveyPartElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NwcProgressBar {
        "value"?: any;
    }
    interface NwcSubmit {
        "loading"?: boolean;
        "value"?: string;
    }
    interface NwcSurveyPart {
        "admin"?: boolean;
        "question"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "nwc-progress-bar": NwcProgressBar;
        "nwc-submit": NwcSubmit;
        "nwc-survey-part": NwcSurveyPart;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nwc-progress-bar": LocalJSX.NwcProgressBar & JSXBase.HTMLAttributes<HTMLNwcProgressBarElement>;
            "nwc-submit": LocalJSX.NwcSubmit & JSXBase.HTMLAttributes<HTMLNwcSubmitElement>;
            "nwc-survey-part": LocalJSX.NwcSurveyPart & JSXBase.HTMLAttributes<HTMLNwcSurveyPartElement>;
        }
    }
}
