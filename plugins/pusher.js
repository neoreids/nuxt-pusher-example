import Pusher from 'pusher-js'

const pusher = new Pusher(process.env.KEY_PUSHER, {
  cluster: process.env.CLUSTER_PUSHER
})

export default pusher
