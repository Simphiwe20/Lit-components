import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from "./interfaces.ts"
import "./index.css"
import '@material/web/icon/icon.js'; // Import Material Icons


@customElement("my-task")
export class myTask extends LitElement {

    @property()
    task: Task = {title: "Untitled", completedBy: new Date, assignedTo: "N/A", createdOn: new Date, _type: "N/A", priority: "basic"}

    render() {
        return html `
            <div class="task-container">
                <div class="flex spacebetween-center">
                    <h3>${this.task.title}</h3>
                    <div class="flex center-center">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
                     <md-icon class="pointer">edit</md-icon>
                     <md-icon class="pointer">delete</md-icon>
                    </div>
                </div>
                <div class="cat-container">
                    <small>${this.task._type}</small>
                    <small>Priority: ${this.task.priority}</small>
                </div>
                <p>Completed by: ${this.task.completedBy.toLocaleString()}</p>
                <p>Assigned by: ${this.task.assignedTo}</p>
                <p>Created on: ${this.task.createdOn.toLocaleString()}</p>
            </div>
        `
    }

    static styles = css `
        .task-container {
            padding: 10px 20px;
            box-sizing: border-box;
            border: 2px solid grey;
            border-radius: 20px;
        }

        .flex {
            display: flex
        }

        .spacebetween-center {
            justify-content: space-between;
            align-items: center;
        }

        .center-center {
            justify-content: center;
            align-items: center;
        }

        .pointer {
            cursor: pointer
        }

        h3 {
            margin: 7px 0px;
        }
        
        p {
            margin: 7px 0px;
            font-size: 13px;
        }

        small {
            font-size: x-small
        }
    `


}