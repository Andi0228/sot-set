import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollovingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import * as Axios from "axios";
import Users from "./Users";
import Preloader from "../commom/preloader/preloader.jsx";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "../../redux/users-selectors";

class UsersComponent extends React.Component {
  /*constructor(props){
super(props);
  } */ // эти строки можно не писать , так как в конструкторе кроме наследования элементов родительсково класса не происходит
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageCenged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFeching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageCenged={this.onPageCenged}
          unfollow={this.props.unfollow}
          users={this.props.users}
          follow={this.props.follow}
          toggleFollovingProgress={this.props.toggleFollovingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = state => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFeching: state.usersPage.isFeching,
//     followingInProgress: state.usersPage.followingInProgress
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFeching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  //withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollovingProgress,
    requestUsers,
  })
)(UsersComponent);
