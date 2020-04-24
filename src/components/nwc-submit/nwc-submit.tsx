import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "nwc-submit",
  styleUrl: "nwc-submit.css",
  shadow: false,
  scoped: true
})
export class NwcSubmit implements ComponentInterface {
  @Prop() value: string = " ";
  @Prop() loading: boolean = false;
  @Prop() formId: string = "adminform";

  render() {
    return (
      <Host>
        <button disabled={this.loading} type="submit" form={this.formId}>
        <span>{this.value}</span>
        {this.loading && <div class="spinner"></div>}
        </button>
      </Host>
    );
  } 
}
