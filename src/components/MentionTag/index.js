import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
import Editor from "draft-js-plugins-editor";
import Draft from "draft-js";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "draft-js-mention-plugin";
import { stateToHTML } from "draft-js-export-html";
import "draft-js-mention-plugin/lib/plugin.css";
import "draft-js/dist/Draft.css";
import _ from "lodash";

const cmdState = {
  handled: "handled",
  notHandled: "not-handled",
};
const emptyContentState = Draft.convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "wholeInputBlock",
      type: "unstyled",
      entityRanges: [],
    },
  ],
});
//000
function convertInitialContent(text) {
  let i = 0;
  let resultAll = {
    entityMap: {},
    blocks: [
      {
        text: text,
        key: "wholeInputBlock",
        type: "unstyled",
        entityRanges: [],
      },
    ],
  };
  text.replace(/\@(\w+)/g, (match, name, offset) => {
    resultAll.entityMap[i] = {
      data: {
        mention: {
          display: name,
          id: i,
          name,
        },
      },
      mutability: "IMMUTABLE",
      type: "mention",
    };
    resultAll.blocks[0].entityRanges.push({
      key: i,
      offset: offset,
      length: match.length,
    });
    i++;
  });
  // console.log(resultAll);
  return resultAll;
}
const initialContentState = Draft.convertFromRaw(
  convertInitialContent("這編輯的字 @Foo 測試 @Bar 測試 @Hey ")
);
//編輯文字方法一
// const html = `這裡的function會自己轉換 <i>這是斜體字</i>`;
// const blocksFromHTML = Draft.convertFromHTML(html);
// const initialContentState = Draft.ContentState.createFromBlockArray(
//     blocksFromHTML.contentBlocks,
//     blocksFromHTML.entityMap
// );
//編輯文字方法二
const initialContentState3 = Draft.convertFromRaw({
  entityMap: {
    0: {
      data: {
        mention: {
          display: "Foo",
          id: "1",
          name: "Foo",
        },
      },
      mutability: "IMMUTABLE",
      type: "mention",
    },
    1: {
      data: {
        mention: {
          display: "Bar",
          id: "2",
          name: "Bar",
        },
      },
      mutability: "IMMUTABLE",
      type: "mention",
    },
  },
  blocks: [
    {
      text: "這編輯的字 Foo  Bar 自己key位置",
      key: "wholeInputBlock",
      type: "unstyled",
      entityRanges: [
        { key: 0, length: 3, offset: 6 },
        { key: 1, length: 3, offset: 11 },
      ],
    },
  ],
});
class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.mentionPlugin = createMentionPlugin({
      entityMutability: "IMMUTABLE",
    });
    this.state = {
      editorState: EditorState.createWithContent(initialContentState),
      suggestions: this.props.mentions,
    };
  }
  reset = () => {
    this.setState({
      editorState: EditorState.createWithContent(emptyContentState),
    });
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, this.props.mentions),
    });
  };

  keyBindingFn = (e) => {
    // retrun custom commands on keyPress if required
    return getDefaultKeyBinding(e);
  };

  toHtml = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const raw = Draft.convertToRaw(contentState);
    const mentionArr = Object.values(raw.entityMap).map(
      (val) => val.data.mention
    );
    // console.log(raw);
    const options = {
      entityStyleFn: (entity) => {
        const entityType = entity.get("type").toLowerCase();
        if (entityType === "mention") {
          const data = entity.getData();
          return {
            element: "M",
          };
        }
      },
    };
    const strarr = stateToHTML(contentState, options).split(" ");
    let i = -1;
    const result = strarr
      .map((sm) => {
        if (sm.match(/<M(([\s\S])*?)<\/M>/g)) {
          i++;
          return sm.replace(
            /<M(([\s\S])*?)<\/M>/g,
            `<!M[{"n":${mentionArr[i].name},"i":${mentionArr[i].id}}]>`
          );
        } else {
          return sm;
        }
      })
      .join(" ")
      .replace(/\<p\>|\<\/p\>/g, "");
    return result;
  };
  onChange = (editorState) => {
    const { setValue } = this.props;
    this.setState({
      editorState,
    });
    setValue(this.toHtml());
  };
  handleKeyCommand = (command) => {
    // handle custom command here;
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return cmdState.handled;
    }
    return cmdState.notHandled;
  };
  render() {
    const { MentionSuggestions } = this.mentionPlugin;
    const plugins = [this.mentionPlugin];
    const { className, style, placeholder } = this.props;
    return (
      <div className={`editor ${className}`} style={style}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          keyBindingFn={this.keyBindingFn}
          handleKeyCommand={this.handleKeyCommand}
          placeholder={placeholder}
          ref={(element) => {
            this.editor = element;
          }}
        />

        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
}

PostEditor.propTypes = {
  mentions: PropTypes.arrayOf(PropTypes.any),
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
};

PostEditor.defaultProps = {
  mentions: [],
};

export default PostEditor;
