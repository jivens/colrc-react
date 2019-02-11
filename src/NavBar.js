import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faFont, faSquareRootAlt, faLeaf, faBars, faEnvelope,faBookOpen } from '@fortawesome/free-solid-svg-icons';
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
import ReactTable from "react-table";
//import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarMobile = ({
  children,
  //leftItems,
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
      size='mini'
      vertical
      visible={visible}
      width='thin'
    >
    <Menu.Item as={Link} to="/" name="About" size='mini'>
	   <Icon name="home" />
      About
    </Menu.Item>
    <Menu.Item as={Link} to="/rootdictionary" name="Roots" size='mini'>
    <Icon name='sort alphabet down' />
       Roots
    </Menu.Item>
    <Menu.Item as={Link} to="/stemlist" name="Stems">
    <Icon name='code branch' />
       Stems
    </Menu.Item>
    <Menu.Item as={Link} to="/affixlist" name="Affixes">
    <Icon name="leaf" />
       Affixes
    </Menu.Item>
    <Menu.Item as={Link} to="/texts" name="Texts">
    <Icon name="comment" />
       Texts
    </Menu.Item>
    <Menu.Item as={Link} to="/audio" name="Audio">
    <Icon name="file audio outline" />
       Audio
    </Menu.Item>
    <Menu.Item as={Link} to="/spelling" name="Spelling">
     <Icon name="font" />
       Spelling
    </Menu.Item>
    <Menu.Item as={Link} to="/bibliography" name="Bibliography">
    <Icon name="book" />
       Bibliography
    </Menu.Item>
    <Menu.Item as={Link} to="/contactus" name="Contact">
    <Icon name="mail" />
       Contact
    </Menu.Item>
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

const NavBarDesktop = ({ rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item as={Link} to="/" name="about">
       <FontAwesomeIcon icon={faHome} />
    </Menu.Item>
    <Menu.Item as={Link} to="/rootdictionary" name="Roots">
       Roots
    </Menu.Item>
    <Menu.Item as={Link} to="/stemlist" name="Stems">
       Stems
    </Menu.Item>
     <Menu.Item as={Link} to="/affixlist" name="Affixes">
       Affixes
    </Menu.Item>
    <Menu.Item as={Link} to="/texts" name="Texts">
       Texts
    </Menu.Item>
    <Menu.Item as={Link} to="/audio" name="Audio">
       Audio
    </Menu.Item>
    <Menu.Item as={Link} to="/spelling" name="Spelling">
       Spelling
    </Menu.Item>
    <Menu.Item as={Link} to="/bibliography" name="Bibliography">
       Bibliography
    </Menu.Item>
    <Menu.Item as={Link} to="/contactus" name="Contact">
       Contact
    </Menu.Item>
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
    const { children, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            //leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>

        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
