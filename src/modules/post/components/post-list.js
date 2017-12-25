
import React from "react";

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export class PostList extends React.Component {

  render() {
    return (
      <div>
        {this.props.posts.map((post) => {

          return <div key={post.id} style={{ paddingBottom: "10px" }}>
            <Card>
              <CardContent>
                <Typography type="headline" component="h2">
                  {post.title}
                </Typography>

                <Typography component="p">
                  {post.body}
                </Typography>

              </CardContent>
            </Card>
          </div>
        })}
      </div>
    )
  }
}