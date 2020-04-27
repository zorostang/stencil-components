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
      function submitForm(questionText){
        let data = {
          title: questionText,
          yes: 0,
          no:0 
        };
        fetch('//localhost:3000/questions/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

      }
      return (
        <Host>
          <form id="adminform" onSubmit={
            (event)=>{ 
              let questionText = event.target[0].value;
              console.log(event.target[0].value);
              console.log(event);
              console.log(event.target);
              event.preventDefault();
              submitForm(questionText);
              }}>
            <label >
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
