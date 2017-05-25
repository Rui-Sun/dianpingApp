import React from 'react';
import Paper from 'material-ui/Paper';
import './style.css';

export default class ListItem extends React.Component {
  componentDidMount() {
    let timeoutId = {};
    const callback = () => {
      const rect = this.refs.loadMore.getBoundingClientRect();
      const windowHeight = window.screen.availHeight;
      if(rect.top && rect.top + rect.height -20 < windowHeight) {
        this.loadMore();
      }
    };
    window.addEventListener('scroll', () => {
      if(this.props.isLoadingMore) {
        return
      }
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(callback, 100);
    })
  }

  loadMore() {
    this.props.loadMoreData();
  }

  render() {
    return(
      <Paper>
        <p className="load-more-buttom" ref="loadMore">
          {
            this.props.isLoadingMore ?
            '加载中'
            :
            <span onClick={this.loadMore.bind(this)}>加载更多...</span>
          }
        </p>
      </Paper>
    )
  }
}