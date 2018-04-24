/**
 * Created by Rayr Lee on 2018/4/24.
 */

class MainApp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            isModalActive: false,
            isModalAppendable: true
        };
        this.activateModal = this.activateModal.bind(this);
        this.deactivateModal = this.deactivateModal.bind(this);
        this.unmountModal = this.unmountModal.bind(this);
    }

    activateModal() {
        this.setState({
            isModalActive: true
        });
    }

    deactivateModal() {
        this.setState({
            isModalActive: false
        });
    }

    unmountModal() {
        this.setState({
            isModalActive: false,
            isModalAppendable: false
        });
    }

    render() {
        //this ugly hunk of trash determines if we should unmount the component by returning the right things
        let modal = this.state.isModalAppendable
            ? (<Modal isActive={this.state.isModalActive} closeModal={this.deactivateModal}>
                <div className='modal-wrapper'>
                    <div className='insult'>And he doesn't have that many.....</div>
                    <div className='button-row'>
                        <button onClick={this.deactivateModal}>Close modal bruh</button>
                        <button onClick={this.unmountModal}>Close modal and unmount component bruh</button>
                    </div>
                </div>
            </Modal>)
            : null;

        return (
            <div className={'app-cont'}>
        <span className={'__center'}>
          <CenterDiv activateModal={this.activateModal}/>
            {modal}
        </span>
            </div>
        );
    }
}

class Modal extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleClickInside = this.handleClickInside.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        //create an element to append
        this.modal = document.createElement('div');
        //append that shit
        document.body.appendChild(this.modal);
        //call the render method to add custom styled div and children contents to appended element
        this.renderModalContent(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.renderModalContent(newProps);
    }

    componentWillUnmount() {
        //act like this shit was never here ever
        ReactDOM.unmountComponentAtNode(this.modal);
        document.body.removeChild(this.modal);
    }

    handleClickInside(e) {
        e.stopPropagation();
    }

    handleClickOutside() {
        this.props.closeModal();
    }

    renderModalContent(props) {
        //put something in the appended shit
        let cont;
        ReactDOM.render(
            <div id='modal-container'>
                <div className='overlay'></div>
                <div className='modal' onClick={this.handleClickOutside}>
                    <div className='modal-content' onClick={this.handleClickInside}>
                        {this.props.children}
                    </div>
                </div>
            </div>,
            this.modal
        );
        cont = document.getElementById('modal-container');
        if (props.isActive) {
            cont.classList.add('active');
        } else {
            cont.classList.remove('active');
        }
    }

    render() {
        //don't render anything here because we are appending to the body portal style ahhhh yissssss
        return null;
    }
}

const CenterDiv = (props) => {
    return (
        <div>
            <span>JRU is a jerk that doesn't like his friends.</span><br/>
            <button className='__btn' onClick={props.activateModal}>PUSH ME</button>
        </div>
    );
};

ReactDOM.render(<MainApp/>, document.getElementById('app'));
