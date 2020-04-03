import { Vue, Component } from 'vue-property-decorator';

declare module 'vue/types/vue' {
    interface Vue {
        value: string;
    }
}

@Component
export default class MyMixins extends Vue {
    value = 'Hello'
}
