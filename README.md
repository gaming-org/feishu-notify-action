### Feishu Notify Action
#### Overview

This is the first release of Feishu Notify Action, a reusable GitHub Action for sending interactive message cards to Feishu (Lark) groups or chats.
It allows your CI/CD pipelines to push real-time notifications directly into Feishu, using pre-defined card templates.

#### Features

- Secure authentication with Feishu App ID and Secret
- Send interactive card messages using Feishu Card Template IDs
- Dynamic variables: inject JSON data into your Feishu card templates
- Supports group chats: specify Feishu Chat ID for notifications
- Lightweight & reusable: designed for CI/CD pipelines
- Powered by official Feishu Node SDK (@larksuiteoapi/node-sdk)

#### Usage Example
```yaml
- name: Send notification to Feishu
  uses: gaming-org/feishu-notify-action@v1
  with:
    app_id: ${{ secrets.FEISHU_APP_ID }}
    app_secret: ${{ secrets.FEISHU_APP_SECRET }}
    template_id: "tpl_xxx123"
    chat_id: "oc_xxx456"
    template_data: '{"title": "Deploy Success", "env": "uat", "commit": "${{ github.sha }}"}'
```