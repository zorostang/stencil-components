import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "nwc-submit",
  styleUrl: "nwc-submit.css",
  shadow: true,
})
export class NwcSubmit implements ComponentInterface {
  @Prop() value: string = " ";
  @Prop() loading: boolean = false;

  render() {
    return (
      <button disabled={this.loading} type="submit">
        <span>{this.value}</span>
        {this.loading && <div class="spinner"></div>}
      </button>
    );
  } 
}
