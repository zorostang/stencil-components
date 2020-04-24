import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nwc-survey-part',
  styleUrl: 'nwc-survey-part.css',
  shadow: true,
})
export class NwcSurveyPart implements ComponentInterface {

  @Prop() admin: boolean;

  @Prop() question: string;

  render() {
    if(this.admin){
      return (
        <Host>
          <form id="adminform">
            <label htmlfor="question1">
              Question 1:
            </label>
            <br></br>
            <textarea id="question1" rows={4} cols={50} required></textarea>
            <nwc-submit value="Create Survey" loading={false} ></nwc-submit>
          </form>
        </Host>
      );
    }

    if(!this.admin){
      return(
        <Host>
          <form>
            <p>{this.question}</p>
            <input type="radio" id="yes" value="yes" name="user-answer" required></input>
            <label htmlfor="yes">Yes</label>
            <input type="radio" id="no" value="no" name="user-answer"></input>
            <label htmlfor="no">No</label>
            <nwc-submit value="Submit Answer" loading={false} ></nwc-submit>
          </form>
        </Host>
      );
    }
  }

}
