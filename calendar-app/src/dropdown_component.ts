import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import "./calendar_component.ts"

@customElement('dropdown-comp')

export class dropdownComp extends LitElement {

    @property({ type: Array})
    users = ["N Maluleka", "T Pule", "B Kopo", "B Radipade", "S Nene"]
    
    @property({type: String})
    selectedUser = ""

    @property({type: Boolean})
    isAddComment = false

    render() {
        return html `
            <div class="flex column">    
                <div class="flex end">
                ${!this.isAddComment
                    ?
                    html `
                    <select @click=${this.selectUser}>
                        <option value="" disabled selected>Select a user</option>
                        ${this.users.map(user => html `<option>${user}</option>`)}
                    </select>
                    `
                    :
                    html `
                    <div>
                        <small @click=${this.addComment}>Comment</small>
                    </div>
                    `
                }
                </div>
                <div class="flex-1 ">
                    <calendar-comp .user=${this.selectedUser} .isComment=${this.isAddComment}></calendar-comp>
                </div>
            </div>
        `
    }

    selectUser(event : any) {
        this.selectedUser = event.target.value
    }

    addComment() {
        this.isAddComment = !this.isAddComment
    }

    static styles =  css `
        .flex {
            display: flex;
        }

        .end {
            justify-content: end;
        }

        .column {
            flex-direction: column
        }

        .flex-1 {
            flex: 1
        }
    `

}