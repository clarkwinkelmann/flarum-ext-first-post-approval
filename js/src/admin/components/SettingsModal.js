import app from 'flarum/app';
import BaseSettingsModal from 'flarum/components/SettingsModal';

/* global m */

const settingsPrefix = 'clarkwinkelmann-first-post-approval.';
const translationPrefix = 'clarkwinkelmann-first-post-approval.admin.settings.';

export default class SettingsModal extends BaseSettingsModal {
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    form() {
        return [
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'postCount')),
                m('input.FormControl', {
                    type: 'number',
                    min: 0,
                    step: 1,
                    bidi: this.setting(settingsPrefix + 'postCount', 0),
                }),
            ]),
            m('.Form-group', [
                m('label', app.translator.trans(translationPrefix + 'discussionCount')),
                m('input.FormControl', {
                    type: 'number',
                    min: 0,
                    step: 1,
                    bidi: this.setting(settingsPrefix + 'discussionCount', 0),
                }),
            ]),
        ];
    }
}
