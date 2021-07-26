// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

// ? HTMLCreatorJS repository
import HTMLCreator from "../HTMLCreator.js";

/**
 * * Item creates an excellent <li>.
 * @export
 * @class Item
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Item extends Html {
    /**
     * * Creates an instance of Item.
     * @param {object} [props]
     * @param {string} [props.id='li-1'] Primary key.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {string|HTMLElement|array|false} [innerHTML=false] Inner HTML Element.
     * @memberof Item
     */
    constructor (props = {
        id: 'li-1',
        classes: [],
    }, state = {
        id: false,
    }, innerHTML = false) {
        super({ ...Item.props, ...props }, { ...Item.state, ...state });
        this.createHTML(this.props.nodeName);
        HTMLCreator.setInnerHTML(this, innerHTML);
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Item
     */
    static props = {
        id: 'li-1',
        classes: [],
        nodeName: 'LI',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Item
     */
    static state = {
        id: false,
    }
}

// ? Default export
export default Item;