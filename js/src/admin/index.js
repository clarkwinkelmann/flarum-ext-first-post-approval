import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import SettingsModal from './components/SettingsModal';

app.initializers.add('clarkwinkelmann-first-post-approval', () => {
    app.extensionSettings['clarkwinkelmann-first-post-approval'] = () => app.modal.show(new SettingsModal());

    extend(PermissionGrid.prototype, 'startItems', items => {
        items.add('clarkwinkelmann-group-invitation-use', {
            icon: 'fas fa-check',
            label: app.translator.trans('clarkwinkelmann-first-post-approval.admin.permissions.bypass'),
            permission: 'discussion.firstPostWithoutApproval',
        });
    });
});
