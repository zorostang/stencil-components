import { Component, ComponentInterface, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'nwc-survey-part',
  styleUrl: 'nwc-survey-part.css',
  shadow: true,
})
export class NwcSurveyPart implements ComponentInterface {

  @Prop() admin: boolean;

  @Prop() question: string;

  @Prop() questionId: number;

  @Element() el: HTMLElement;

  @State() btnloading: boolean = false;

  componentWillLoad(){
    if(!this.admin){
      fetch('//localhost:3000/questions/'+this.questionId)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.question=data.title
        });
    }
  }
  submitForm(questionText){
    this.btnloading = true;
    let data = {
      title: questionText
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
        this.btnloading=false;
        console.log('Success:', data);
      })
      .catch((error) => {
        this.btnloading=false;
        console.error('Error:', error);
      });

  }
  submitUserForm(questionId, userAnswer){
    this.btnloading = true;
    let data = {
        "questionId": questionId,
        "response": userAnswer
    };
    fetch('//localhost:3000/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        this.btnloading=false;
        console.log('Success:', data.responses);
      })
      .catch((error) => {
        this.btnloading=false;
        console.error('Error:', error);
      });

  }

  render() {
    if(this.admin){

      return (
        <Host>
          <form id="adminform" onSubmit={
            (event)=>{ 
              let questionText = event.target[0].value;
              // console.log(event.target[0].value);
              // console.log('event.target:');
              // console.log(event.target);
              event.preventDefault();
              this.submitForm(questionText);
              }}>
            <label >
              Question 1:
            </label>
            <br></br>
            <textarea id="question1" rows={4} cols={50} required></textarea>
            <nwc-submit value="Create Survey" loading={this.btnloading}></nwc-submit>
          </form>
        </Host>
      );
    }

    if(!this.admin){
      return(
        <Host>
          <form id="user-form" onSubmit={(event)=>{
            let userAnswer=this.el.shadowRoot.querySelector('input[name="user-answer"]:checked').id;
            event.preventDefault();
            // console.log(this.el.shadowRoot.querySelector('input[name="user-answer"]:checked'));
            this.submitUserForm(this.questionId, userAnswer);
          }}>
            <p>{this.question}</p>
            <input type="radio" id="yes" value="yes" name="user-answer" required></input>
            <label htmlfor="yes">Yes</label>
            <input type="radio" id="no" value="no" name="user-answer"></input>
            <label htmlfor="no">No</label>
            <nwc-submit value="Submit Answer" loading={this.btnloading}></nwc-submit>
          </form>
        </Host>
      );
    }
  }

}
