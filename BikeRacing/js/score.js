      function sendScoreCallback(payload) {
        console.log(payload)

        var handler = window.callbackHandler || (window.webkit && webkit.messageHandlers.callbackHandler)

        if (!handler) {
          console.warn('no callback handler found, won\'t call native code')
          return
        }

        try {
          handler.postMessage(JSON.stringify(payload))
        } catch(err) {
          console.error(err)
          console.log('The native context does not exist')
        }

     }


function sendSampleScoreCallback() {
    var payload = {
        "token": "string-to-be-add",
        "type": "score",
        "score": 0,
        "name": "Tarun",
        "image": "https://res.cloudinary.com/teepublic/image/private/s--1mnswHHJ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_fffffe,e_outline:35/co_fffffe,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1516229303/production/designs/2287357_0.jpg",
        "channelId": "string-to-be-add",
        "senderProfileId": "string-to-be-add",
        "extensionId": "string-to-be-add",
        "extensionVersion": 1,
        "extensionMessageId": "NA",
        "channelMembersId": "NA"
    }
    sendScoreCallback(payload);
}