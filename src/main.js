import VueTinymce from './vue-tinymce.vue'
export { VueTinymce }
class VuePlugin{
    constructor(){
        const { prefix } = { prefix: "" }
        this.prefix = prefix;
    }
    install(Vue, options={}){
        const prefix = options.prefix || this.prefix
        const components = {
            VueTinymce
        }
        Object.keys(components).forEach(key => {
            const component = components[key];
            Vue.component(prefix+component.name, component);
        });
    }
}
export function loadTinymce(url) {
    var js = document.createElement('script')
    js.src = url
    js.defer = true
    js.onload = function() {
      document.dispatchEvent(new Event('tinymce'))
    }
  
    document.body.appendChild(js)
}
export default new VuePlugin()