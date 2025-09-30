import * as core from '@actions/core';
import { FeishuClient } from './client';

async function run() {
  try {
    const appId = core.getInput('app_id', { required: true });
    const appSecret = core.getInput('app_secret', { required: true });
    const templateId = core.getInput('template_id', { required: true });
    const chatId = core.getInput('chat_id', { required: true });
    const templateData = JSON.parse(core.getInput('template_data'));

    const feishu = new FeishuClient(appId, appSecret);
    const result = await feishu.sendCard(chatId, templateId, templateData);

    core.info(`Feishu notify success: ${JSON.stringify(result)}`);
  } catch (error: any) {
    core.setFailed(`Feishu notify failed: ${error.message}`);
  }
}

run();
