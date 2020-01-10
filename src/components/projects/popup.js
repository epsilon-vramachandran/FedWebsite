import React from "react";
import ListDescription from "./listdescription";
import { CSSTransition } from "react-transition-group";

export default class Fedpopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({ key: this.props.card.popupContent[0].key });
  }
  render() {
    let selectedCard = this.props.card.popupContent.find(
      popup => popup.key === this.state.key
    );
    return (
      <div className="popup_Blk">
        <a
          href="javascript:void(0)"
          onClick={this.props.handleCloseClick}
          className="close"
        >
          close
        </a>
        <CSSTransition in={true} appear={true} timeout={600} classNames="slide">
          <div className="blk_left">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h2>
            {this.props.card.popupContent.map((item, i) => (
              <a
                href="javascript:void(0);"
                onClick={() => this.setState({ key: item.key })}
                key={i}
              >
                {item.key}
              </a>
            ))}
          </div>
        </CSSTransition>
        {selectedCard ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames="scale"
            >
              <div
                className="blk_right"
                style={{
                  backgroundImage: `url(${this.props.popupBackground})`
                }}
              >
                <ListDescription description={selectedCard.description} />
              </div>
            </CSSTransition>
          </div>
        ) : (
          ""
        )}
        {/* <div className="blk_right">{props.item.popupContent}</div> */}
      </div>
    );
  }
}
