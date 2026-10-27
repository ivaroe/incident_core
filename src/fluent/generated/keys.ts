import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '18fa10c6cf3e437e906f40b1042a5893'
                    }
                    br_set_original_ag: {
                        table: 'sys_script'
                        id: '7815dd9d50a1429eabdb89e43efbd226'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '0b65c607b76d4d3688d7d3c6e001ae23'
                    }
                    cs_assigned_mandatory_ag: {
                        table: 'sys_script_client'
                        id: 'a6c351cd42644160961659090f8f91ad'
                    }
                    cs_assigned_mandatory_load: {
                        table: 'sys_script_client'
                        id: '68d8c50a73a74d7ea9cfa0da1266ac7d'
                    }
                    cs_assigned_mandatory_state: {
                        table: 'sys_script_client'
                        id: 'c8be8f701d8c493798ccad3d3e437b3d'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '2dcf88dc31be4992b3a32ff4ee6fc8c9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7ccc93223d5447fba7f5893585a8e2db'
                    }
                    src_server_BusinessRule_setOriginalAG_server_js: {
                        table: 'sys_module'
                        id: 'c66c9ddf4e43496a8136108358338670'
                    }
                    src_server_ClientScript_assignedToMandatory_onchange_client_js: {
                        table: 'sys_module'
                        id: '14559e025cc244adb6967c42d9516bc1'
                    }
                    src_server_ClientScript_assignedToMandatory_onload_client_js: {
                        table: 'sys_module'
                        id: '882bfdd7938042908533d921d0d7c7c5'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '315f29f5ed2347738d30d7fd84e6d9d1'
                    }
                }
            }
        }
    }
}
