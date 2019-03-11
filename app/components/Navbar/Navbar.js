import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './style.scss';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav
        className={classnames('navbar', {
          // eslint-disable-next-line react/destructuring-assignment
          'navbar--hidden': !this.state.visible
        })}
      >
        <div className="nav-content">
          <Link className="nav-link" to="#">
            Link 1
          </Link>
          <Link className="nav-link" to="#">
            Link 2
          </Link>
          <Link className="nav-link" to="#">
            Link 3
          </Link>
        </div>
      </nav>
    );
  }
}
