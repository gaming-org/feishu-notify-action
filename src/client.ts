import { Client } from '@larksuiteoapi/node-sdk';

export class FeishuClient {
  private client: Client;

  constructor(appId: string, appSecret: string) {
    this.client = new Client({
      appId,
      appSecret,
      disableTokenCache: false,
    });
  }

  async sendCard(chatId: string, templateId: string, templateData: Record<string, any>) {
    return this.client.im.message.create({
      params: { receive_id_type: 'chat_id' },
      data: {
        receive_id: chatId,
        msg_type: 'interactive',
        content: JSON.stringify({
          type: 'template',
          data: {
            template_id: templateId,
            template_variable: templateData,
          },
        }),
      },
    });
  }
}
