import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faFont, faSquareRootAlt, faLeaf, faBars } from '@fortawesome/free-solid-svg-icons';
import { faPagelines, faAudible } from '@fortawesome/free-brands-svg-icons';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment,
  Responsive
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width='thin'
    >
    <Menu.Item as={Link} to="/affixlist" name="Affixes">
    	<FontAwesomeIcon icon={faLeaf} />
      	Affixes
   	</Menu.Item>  
    {_.map(leftItems, item => <Menu.Item as={Link} {...item} />)}
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <FontAwesomeIcon icon={faHome} />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {_.map(rightItems, item => <Menu.Item as={Link} {...item} />)}
          </Menu.Menu>
        </Menu>
        {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
       <FontAwesomeIcon icon={faHome} />
    </Menu.Item>
    <Menu.Item as={Link} to="/affixlist" name="Affixes">
       Affixes
    </Menu.Item>    
    {_.map(leftItems, item => <Menu.Item as={Link} {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item as={Link} {...item} />)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;