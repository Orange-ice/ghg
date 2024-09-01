import axios from 'axios';
import { MessageType } from '@/store/modules/user/types';
import { API_PREFIX } from '@/api/prefix';

export interface MessageRecord {
  id: number;
  type: string;
  title: string;
  subTitle: string;
  avatar?: string;
  content: string;
  time: string;
  status: 0 | 1;
  messageType?: number;
}
export type MessageListType = MessageRecord[];

export function queryMessageList() {
  return axios.post<MessageListType>('/api/message/list');
}

interface MessageStatus {
  ids: number[];
}

export function setMessageStatus(data: MessageStatus) {
  return axios.post<MessageListType>('/api/message/read', data);
}

export interface ChatRecord {
  id: number;
  username: string;
  content: string;
  time: string;
  isCollect: boolean;
}

export function queryChatList() {
  return axios.post<ChatRecord[]>('/api/chat/list');
}


/**
 * 获取消息列表
 * @param id
 * @param params readType 0-未读，1-已读
 * @returns
 */
export function getMessageList(
  id: string,
  params: { page: number; size: number; readType: string }
) {
  return axios.get<MessageType[]>(`/webmessage/messages/${id}`, {
    params,
    prefix: API_PREFIX.EC
  });
}
/**
 * 消息设置已读
 * @param id
 * @returns
 */
export function setMessageRead(id: string) {
  return axios.put(`/webmessage/messages/${id}`, {
    prefix: API_PREFIX.EC
  });
}


// 系统消息：标为已读
export function messageRead(userId: string, uuids: string) {
  return axios.put(`/webmessage/messages/front/${userId}/${uuids}`, {
    prefix: API_PREFIX.EC
  });
}

