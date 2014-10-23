export default {
    READY_STATES: {
        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3
    },
    SOCKET_EVENTS: ['onclose', 'onerror', 'onmessage', 'onopen']
};
