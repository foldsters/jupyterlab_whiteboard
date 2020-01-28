import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyterlab_whiteboard extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_whiteboard',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_whiteboard is activated!');
  }
};

export default extension;
