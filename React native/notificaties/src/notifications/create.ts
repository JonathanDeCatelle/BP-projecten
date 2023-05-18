import notifee from '@notifee/react-native';

export const createNotification = async (title: string, body: string) => {
    await notifee.displayNotification({
        title,
        body,
        android: {
            channelId: 'bachproef',
            pressAction: {
                id: 'default',
            },
        },
    });
}