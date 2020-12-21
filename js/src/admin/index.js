import app from 'flarum/app';

/* global m */

const settingsPrefix = 'clarkwinkelmann-first-post-approval.';
const translationPrefix = 'clarkwinkelmann-first-post-approval.admin.settings.';

app.initializers.add('clarkwinkelmann-first-post-approval', () => {
    app.extensionData
        .for('clarkwinkelmann-first-post-approval')
        .registerSetting(function () {
            return m('.Form-group', [
                m('label', {
                    for: 'clarkwinkelmann-first-post-approval-postCount',
                }, app.translator.trans(translationPrefix + 'postCount')),
                m('input.FormControl', {
                    id: 'clarkwinkelmann-first-post-approval-postCount',
                    type: 'number',
                    min: 0,
                    step: 1,
                    bidi: this.setting(settingsPrefix + 'postCount', 0),
                }),
            ]);
        })
        .registerSetting(function () {
            return m('.Form-group', [
                m('label', {
                    for: 'clarkwinkelmann-first-post-approval-discussionCount',
                }, app.translator.trans(translationPrefix + 'discussionCount')),
                m('input.FormControl', {
                    id: 'clarkwinkelmann-first-post-approval-discussionCount',
                    type: 'number',
                    min: 0,
                    step: 1,
                    bidi: this.setting(settingsPrefix + 'discussionCount', 0),
                }),
            ]);
        })
        .registerPermission({
            icon: 'fas fa-check', // Font-Awesome Icon
            label: app.translator.trans('clarkwinkelmann-first-post-approval.admin.permissions.bypass'),
            permission: 'discussion.firstPostWithoutApproval',
        }, 'start');
});
