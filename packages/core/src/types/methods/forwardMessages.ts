import { ApiRequestOptions, ApiResponse } from '../airgram'
import { SendMessageOptionsInput } from '../inputs'
import { MessagesUnion } from '../outputs'

export interface ForwardMessagesParams {
  chatId?: number // Identifier of the chat to which to forward messages
  fromChatId?: number // Identifier of the chat from which to forward messages
  messageIds?: number[] // Identifiers of the messages to forward
  options?: SendMessageOptionsInput // Options to be used to send the messages
  asAlbum?: boolean // True, if the messages should be grouped into an album after forwarding. For this to work, no more than 10 messages may be forwarded, and all of them must be photo or video messages
  sendCopy?: boolean // True, if content of the messages needs to be copied without links to the original messages. Always true if the messages are forwarded to a secret chat
  removeCaption?: boolean // True, if media captions of message copies needs to be removed. Ignored if send_copy is false
}

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order
 * as the message identifiers passed in message_ids. If a message can't be forwarded,
 * null will be returned instead of the message
 * @param {Object} params
 * @param {number} [params.chatId] - Identifier of the chat to which to forward messages
 * @param {number} [params.fromChatId] - Identifier of the chat from which to forward
 * messages
 * @param {number[]} [params.messageIds] - Identifiers of the messages to forward
 * @param {SendMessageOptionsInput} [params.options] - Options to be used to send
 * the messages
 * @param {boolean} [params.asAlbum] - True, if the messages should be grouped into
 * an album after forwarding. For this to work, no more than 10 messages may be forwarded,
 * and all of them must be photo or video messages
 * @param {boolean} [params.sendCopy] - True, if content of the messages needs to
 * be copied without links to the original messages. Always true if the messages are
 * forwarded to a secret chat
 * @param {boolean} [params.removeCaption] - True, if media captions of message copies
 * needs to be removed. Ignored if send_copy is false
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ForwardMessagesParams, MessagesUnion>>}
 */
export type forwardMessages = (
  params?: ForwardMessagesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ForwardMessagesParams, MessagesUnion>>
