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
                    br0: {
                        table: 'sys_script'
                        id: '0b65c607b76d4d3688d7d3c6e001ae23'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '2dcf88dc31be4992b3a32ff4ee6fc8c9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7ccc93223d5447fba7f5893585a8e2db'
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
