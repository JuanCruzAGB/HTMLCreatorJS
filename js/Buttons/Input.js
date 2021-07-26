// ? JuanCruzAGB repository
import Html from "../../../JuanCruzAGB/js/Html.js";

/**
 * * Input creates an excellent <input>.
 * @export
 * @class Input
 * @author Juan Cruz Armentia <juancarmentia@gmail.com>
 * @extends Html
 */
export class Input extends Html {
    /**
     * * Creates an instance of Input.
     * @param {object} [props]
     * @param {string} [props.id='input-1'] Primary key.
     * @param {string} [props.name='input-1']
     * @param {string} [props.type='text']
     * @param {string} [props.defaultValue]
     * @param {string} [props.placeholder]
     * @param {string[]} [props.accept] Mimetype of files accepted.
     * @param {string[]} [props.classes] Class names.
     * @param {object} [state]
     * @param {boolean} [state.checked=false] If the HTML Element should be checked.
     * @param {boolean} [state.disabled=false] If the HTML Element should be disabled.
     * @param {boolean} [state.multiple=false] If the HTML Element should accepts multiple files.
     * @param {boolean} [state.id=false] If the HTML Element should print the id property.
     * @param {object} [callbacks]
     * @param {object} [callbacks.change] Change callback:
     * @param {function} [callbacks.change.function] Change callback function.
     * @param {*} [callbacks.change.params] Change callback function params.
     * @param {object} [callbacks.focusout] On focus out callback:
     * @param {function} [callbacks.focusout.function] On focus out callback function.
     * @param {*} [callbacks.focusout.params] On focus out callback function params.
     * @memberof Input
     */
    constructor (props = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        accept: [],
        classes: [],
    }, state = {
        checked: false,
        disabled: false,
        multiple: false,
        id: false,
    }, callbacks = {
        change: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }, focusout: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }
    }) {
        if (props.type === 'select') {
            props.nodeName = 'SELECT';
        }
        if (props.type === 'textarea') {
            props.nodeName = 'TEXTAREA';
        }
        super({ ...Input.props, ...props }, { ...Input.state, ...state }, { ...Input.callbacks, ...callbacks });
        this.createHTML(this.props.nodeName);
        this.setEventListener();
        this.setHTMLAttributes();
        this.checkState();
    }
    
    /**
     * * Set the Input event listener.
     * @memberof Input
     */
    setEventListener () {
        const instance = this;
        switch (this.props.type) {
            case 'date':
                this.html.addEventListener('change', function (e) {
                    instance.change({
                        value: this.value,
                    });
                });
                this.html.addEventListener('focusout', function (e) {
                    instance.focusout({
                        value: this.value,
                    });
                });
                break;
            case 'checkbox':
                this.html.addEventListener('click', function (e) {
                    instance.click({
                        checked: { [this.value]: this.checked },
                    });
                });
            case 'file':
            case 'radio':
            case 'select':
                this.html.addEventListener('change', function (e) {
                    let params = (
                        (instance.props.type === 'checkbox') ? { checked: { [this.value]: this.checked } } :
                        (instance.props.type === 'file') ? { files: this.files } :
                        (instance.props.type === 'radio') ? { checked: this.value } :
                        (instance.props.type === 'select') ? { selected: this.options[this.selectedIndex] } : {}
                    );
                    instance.change({ ...params });
                });
                break;
            case 'password':
            case 'text':
            case 'textarea':
                this.html.addEventListener('focusout', function (e) {
                    instance.focusout({
                        value: this.value,
                    });
                });
                break;
            default:
                console.error(`Input type: ${ this.props.type } does not have event`);
                break;
        }
    }

    /**
     * * Set the HTML Element attributes.
     * @memberof Input
     */
    setHTMLAttributes () {
        this.setAttribute('name', this.props.name);
        if (this.props.type !== 'select' && this.props.type !== 'textarea') {
            this.setAttribute('type', this.props.type);
        }
        switch (this.props.type) {
            case 'file':
                if (this.props.accept) {
                    this.setAttribute('accept', this.props.accept.join());
                }
                break;
        }
        this.setAttribute('value', this.props.defaultValue);
        this.setAttribute('placeholder', this.props.placeholder);
    }

    /**
     * * Check the Input state.
     * @memberof Input
     */
    checkState () {
        this.checkCheckedState();
        this.checkDisabledState();
        this.checkMultipleState();
    }

    /**
     * * Check the Input checked state.
     * @memberof Input
     */
    checkCheckedState () {
        if (this.state.checked) {
            this.setAttribute('checked', true);
        }
    }

    /**
     * * Check the Input disabled state.
     * @memberof Input
     */
    checkDisabledState () {
        if (this.state.disabled) {
            this.setAttribute('disabled', true);
        }
    }

    /**
     * * Check the Input disabled state.
     * @memberof Input
     */
    checkMultipleState () {
        if (this.state.multiple) {
            this.setAttribute('multiple', true);
        }
    }

    /**
     * @static
     * @var {object} props Default properties.
     * @memberof Input
     */
    static props = {
        id: 'input-1',
        name: 'input-1',
        type: 'text',
        defaultValue: '',
        placeholder: '',
        accept: [],
        classes: [],
        nodeName: 'INPUT',
    }

    /**
     * @static
     * @var {object} state Default state.
     * @memberof Input
     */
    static state = {
        checked: false,
        disabled: false,
        multiple: false,
        id: false,
    }

    /**
     * @static
     * @var {object} callbacks Default callback.
     * @memberof Input
     */
    static callbacks = {
        change: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }, focusout: {
            function: function (params) { /* console.log(params) */ },
            params: {}
        }
    }
}

// ? Default export
export default Input;