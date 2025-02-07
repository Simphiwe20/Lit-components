import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MyElement } from './my-element'

@customElement("calendar-comp")

export class calendarComp extends LitElement {

    @property({type: String})
    user = ""

    @property({type: Boolean})
    isComment = false
    
    render() {

        console.log("USER: ", this.user)
        // console.log("Add comment: ", this.isComment ? "Add" : "Not yet")

        return html `
            <h1>${ this.isComment ? "Comment Comp" : "Calendar Comp"}</h1>
            <p>${this.user ? this.user : "No user selected"}</p>
        `


    }

}



declare global {
    interface HTMLElementTagNameMap {
      'calendar_comp': MyElement
    }
  }