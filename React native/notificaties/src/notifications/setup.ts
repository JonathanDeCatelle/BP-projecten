import notifee, { AuthorizationStatus } from '@notifee/react-native';

export const notificationsSetup = async () => {
    const PERMISSION = await notifee.requestPermission();

    if(PERMISSION.authorizationStatus === AuthorizationStatus.DENIED) {
        return;
    }

    await notifee.createChannel({
        id: 'bachproef',
        name: 'BachproefNotificaties',
    });
}


