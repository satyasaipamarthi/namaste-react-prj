import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    console.log("UserClass ComponentDidMount");
    const data = await fetch("https://api.github.com/users/satyasaipamarthi");
    const jsonData = await data.json();

    console.log("UserInfo API", jsonData);

    this.setState({
      userInfo: jsonData,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("UserClass componentDidUpdate");

    if (prevState.userInfo !== this.state.userInfo) {
      //code executed when userInfo changes
    }
  }

  componentWillUnmount() {
    console.log("UserClass componentWillUnmount");
  }

  render() {
    // const { name, location } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;

    return (
      <div className="user-card">
        {/* <h1> Count: {count} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h1>{name}</h1>
        <h1>{location}</h1>
        <img src={avatar_url} alt="User Avatar" />
        <h2>Contact: @yahoo.in</h2>
      </div>
    );
  }
}

export default UserClass;
