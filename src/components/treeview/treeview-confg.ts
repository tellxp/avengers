/**
 * Created by XiaoPeng on 2016/12/27.
 */
import {Injectable} from '@angular/core';


@Injectable()
export class TreeViewConfig {
  treeview = {
    "name": "demoTree",
    "backgroundColor": "white",
    "width": "200px",
    "nodes": [
      {
        "text": "1",
        "expanded": false,
        "children": [
          {
            "text": "1.1",
            "children": null
          },
          {
            "text": "1.2",
            "children": null
          },
          {
            "text": "1.3",
            "children": null
          }
        ]
      },
      {
        "text": "2",
        "expanded": true,
        "children": [
          {
            "text": "2.1",
            "children": null
          },
          {
            "text": "2.2",
            "children": [
              {
                "text": "2.2.1",
                "children": null
              },
              {
                "text": "2.2.2",
                "children": null
              }
            ]
          }
        ]
      }
    ]
  }
}
