const saveButton = document.getElementById('saveButton');
const outputData = document.getElementById('outputData');

var editor = new EditorJS({
    /**
     * Wrapper of Editor
     */
    holderId: 'editorjs',
    /**
     * Tools list
     */
    tools: {
      /**
       * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
       */
      header: {
        class: Header,
        inlineToolbar: ['link'],
        config: {
          placeholder: 'Header'
        },
        shortcut: 'CMD+SHIFT+H'
      },
      /**
       * Or pass class directly without any configuration
       */
      image: {
        class: SimpleImage,
      },
      list: {
        class: List,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L'
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: 'Quote\'s author',
        },
        shortcut: 'CMD+SHIFT+O'
      },
      warning: Warning,
      marker: {
        class:  Marker,
        shortcut: 'CMD+SHIFT+M'
      },
      code: {
        class:  CodeTool,
        shortcut: 'CMD+SHIFT+C'
      },
      delimiter: Delimiter,
      inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+C'
      },
      linkTool: LinkTool,
      embed: Embed,
      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T'
      },
    },
    /**
     * This Tool will be used as default
     */
    // initialBlock: 'paragraph',
    /**
     * Initial Editor data
     */
    data: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Editor.js",
            level: 2
          }
        },
        {
          type : 'paragraph',
          data : {
            text : 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.'
          }
        },
        {
          type: "header",
          data: {
            text: "Key features",
            level: 3
          }
        },
        {
          type : 'list',
          data : {
            items : [
              'It is a block-styled editor',
              'It returns clean data output in JSON',
              'Designed to be extendable and pluggable with a simple API',
            ],
            style: 'unordered'
          }
        },
        {
          type: "header",
          data: {
            text: "What does it mean «block-styled editor»",
            level: 3
          }
        },
        {
          type : 'paragraph',
          data : {
            text : 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
          }
        },
        {
          type : 'paragraph',
          data : {
            text : `There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.`
          }
        },
        {
          type: "header",
          data: {
            text: "What does it mean clean data output",
            level: 3
          }
        },
        {
          type : 'paragraph',
          data : {
            text : `Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.`
          }
        },
        {
          type: 'image',
          data: {
            url: 'https://avatars0.githubusercontent.com/u/27892231?s=400&v=4',
            caption: '',
            stretched: false,
            withBorder: true,
            withBackground: false,
          }
        },
      ]
    },
    onReady: function(){
      saveButton.click();
    },
    onChange: function() {
      console.log('something changed');
    }
  });


  
function myFunction(){
    editor.save().then((output) => {
       
            console.log('Data: ', output);
            localStorage.setItem('Data', JSON.stringify(output));
       
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
}
