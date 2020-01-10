import React from "react";
import "./projects.css";
import Fedpopup from "./popup";
import Title from "../title/title";

export default class projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    };
  }
  listClick = id => {
    this.setState(prevState => ({
      showPopUp: !prevState.showPopUp,
      id: id
    }));
  };
  handleClick = () => {
    this.setState({ showPopUp: false });
  };
  render() {
    let cards = [
      {
        id: 1,
        background:
          "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4f610e38294007.575c36d5b34c8.jpg",
        title: "Item1_Title",
        subTitle: "Item1_Subtitle",
        popupContent: [
          {
            key: "Item1_Link1",
            description: "Item1_Desc 1"
          },
          {
            key: "Item1_Link2",
            description: "Item1_Desc 2"
          },
          {
            key: "Item1_Link3",
            description: "Item1_Desc 3"
          },
          {
            key: "Item1_Link4",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      },
      {
        id: 2,
        background:
          "https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg",
        title: "Item2_Title2",
        subTitle: "Item2_title2",
        popupContent: [
          {
            key: "Item2_Link1",
            description: "Item2_Desc 1"
          },
          {
            key: "Item2_Link2",
            description: "Item2_Desc 2"
          },
          {
            key: "Item2_Link3",
            description: "Item2_Desc 3"
          },
          {
            key: "Item2_Link4",
            description: "Item2_Desc 4"
          }
        ]
      },
      {
        id: 3,
        background:
          "https://explore.easyprojects.net/wp-content/uploads/2012/08/project-management-952x640.png",
        title: "Item3_Title3",
        subTitle: "Item3_title3",
        popupContent: [
          {
            key: "Item3__Link1",
            description: "Item3_Desc 1"
          },
          {
            key: "Item3__Link2",
            description: "Item3_Desc 2"
          },
          {
            key: "Item3__Link3",
            description: "Item3_Desc 3"
          },
          {
            key: "Item3__Link4",
            description: "Item3__Desc 4"
          }
        ]
      },
      {
        id: 4,
        background:
          "https://districtfoot85.fff.fr/wp-content/uploads/sites/37/2019/06/PLANNING-2-611x378.jpg",
        title: "Item4_Title4",
        subTitle: "Item4_title4",
        popupContent: [
          {
            key: "Item4__Link1",
            description: "Item4_Desc 1"
          },
          {
            key: "Item4__Link2",
            description: "Item4_Desc 2"
          },
          {
            key: "Item4__Link3",
            description: "Item4_Desc 3"
          },
          {
            key: "Item4__Link4",
            description: "Item4__Desc 4"
          }
        ]
      }
    ];
    return (
      <React.Fragment>
        <Title pageName="Projects" />
        {this.state.showPopUp ? (
          <Fedpopup
            card={cards.find(item => item.id === this.state.id)}
            handleCloseClick={this.handleClick}
            popupBackground={
              cards.find(item => item.id === this.state.id).background
            }
          />
        ) : (
          false
        )}

        <div className="container">
          <ul className="Fed_List">
            {cards.map((card, i) => (
              <li onClick={() => this.listClick(card.id)} key={i}>
                <div>
                  <div
                    className="Fed_image"
                    id={card.id}
                    style={{ backgroundImage: `url(${card.background})` }}
                  >
                    <div className="Fed_bg">
                      <span>{card.title}</span>
                      <span>{card.subTitle}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
