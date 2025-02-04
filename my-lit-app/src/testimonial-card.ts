import { LitElement, css, html, render } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '@material/web/icon/icon.js'; // Import Material Icons

interface testimonial {
    name: string,
    testimony: string,
    picture: string
}

@customElement("testimonial-card")
export class Testimonial_card extends LitElement {

    // Define my testimonial array
    @property({ type: Array<Object> })
    testimonials = [
        { name: "Sophia L., Data Scientist", testimony: "A game-changer for staying updated. In the fast-evolving AI and data science fields, Roadmap.sh helps me keep track of emerging technologies and essential skills to learn.", picture: "/src/assets/testimonial 1.jpg" },
        { name: "Alex M., Junior Frontend Developer", testimony: "A lifesaver for self-learners! Roadmap.sh gave me the direction I needed to navigate the overwhelming world of web development. It’s like having a personal mentor guiding every step. Highly recommended!", picture: "/src/assets/testimonial 2.jpg" },
        { name: "Priya R., Cloud Engineer", testimony: "The clarity is unmatched. As someone transitioning into tech from another field, Roadmap.sh made it easy to understand what to focus on and when. I landed my first cloud computing role thanks to their resources!", picture: "/src/assets/testimonial 3.jpg" },
        { name: "Chris W., Software Team Lead", testimony: "This is my go-to resource for team onboarding. I’ve used Roadmap.sh to train new hires in networking and backend development. It’s comprehensive, well-structured, and cuts out all the fluff.", picture: "/src/assets/testimonial 4.jpg" }
    ]

    // Declare variable for a current testimonial
    @property()
    currentTestimonial = this.testimonials[0]

    // Declare variable for a variable to increment
    @property({ type: Number })
    currentIndex = 0

    render() {
        return html`
           <div class="flex center">
           <div class="flex center column container">
               <p class="align-text">${this.currentTestimonial.testimony}</p>
               <div class="flex center gap1em">
                    <md-outlined-icon class="icon" @click=${this.previous}>arrow_back</md-outlined-icon>
                   <div class="image-container square">
                       <img class="full-width full-height square" src=${this.currentTestimonial.picture}>
                   </div>
                   <md-filled-icon class="icon" @click=${this.forward}>arrow_forward</md-filled-icon>
               </div>
               <h4>${this.currentTestimonial.name}</h4>
       </div>
           </div>
        `
    }

    private forward() {
        if (this.testimonials.length - 1 >= this.currentIndex) {
            this.currentIndex++
            this.currentTestimonial = this.testimonials[this.currentIndex]
        }
    }

    private previous() {
        if ( this.currentIndex > 0) {
            this.currentIndex--
            this.currentTestimonial = this.testimonials[this.currentIndex]
        }

    }

    static styles = css`   
        .align-text {
            text-align: center;
        }
        .flex {
            display: flex;
        }
        .center {
            align-items: center;
            justify-content: center;
        }
        .column {
            flex-direction: column
        }
        .gap1em {
            gap: 1em
        }

        .container {
            border: 2px solid;
            padding: 1em;
            box-sizing: border-box;
            border-radius: 15px;
            width: 50%;
        }

        .image-container {
            height: 50px;
            width: 50px
        }

        .square {
            border-radius: 50%
        }

        .full-width {
            width: 100%
        }

        .full-height {
            height: 100%
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'testimonial-card': Testimonial_card
    }
}