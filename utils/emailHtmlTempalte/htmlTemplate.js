module.exports.activateAccount = (user) => {
    return "<html>\n" +
        "<head>\n" +
        "    <style>\n" +
        "        .banner-color {\n" +
        "            background-color: #eb681f;\n" +
        "        }\n" +
        "\n" +
        "        .title-color {\n" +
        "            color: #0066cc;\n" +
        "        }\n" +
        "\n" +
        "        .button-color {\n" +
        "            background-color: #0066cc;\n" +
        "        }\n" +
        "\n" +
        "        @media screen and (min-width: 500px) {\n" +
        "            .banner-color {\n" +
        "                background-color: #0066cc;\n" +
        "            }\n" +
        "\n" +
        "            .title-color {\n" +
        "                color: #eb681f;\n" +
        "            }\n" +
        "\n" +
        "            .button-color {\n" +
        "                background-color: #eb681f;\n" +
        "            }\n" +
        "        }\n" +
        "    </style>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div style=\"background-color:#ececec;padding:0;margin:0 auto;font-weight:200;width:100%!important\">\n" +
        "    <table align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "           style=\"table-layout:fixed;font-weight:200;font-family:Helvetica,Arial,sans-serif\" width=\"100%\">\n" +
        "        <tbody>\n" +
        "        <tr>\n" +
        "            <td align=\"center\">\n" +
        "                <center style=\"width:100%\">\n" +
        "                    <table bgcolor=\"#FFFFFF\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                           style=\"margin:0 auto;max-width:512px;font-weight:200;width:inherit;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                           width=\"512\">\n" +
        "                        <tbody>\n" +
        "                        <tr>\n" +
        "                            <td bgcolor=\"#F3F3F3\" width=\"100%\"\n" +
        "                                style=\"background-color:#f3f3f3;padding:12px;border-bottom:1px solid #ececec\">\n" +
        "                                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                       style=\"font-weight:200;width:100%!important;font-family:Helvetica,Arial,sans-serif;min-width:100%!important\"\n" +
        "                                       width=\"100%\">\n" +
        "                                    <tbody>\n" +
        "                                    <tr>\n" +
        "                                        <td align=\"left\" valign=\"middle\" width=\"50%\"><span\n" +
        "                                                style=\"margin:0;color:#4c4c4c;white-space:normal;display:inline-block;text-decoration:none;font-size:12px;line-height:20px\">TipaHabr</span>\n" +
        "                                        </td>\n" +
        "                                        <td valign=\"middle\" width=\"50%\" align=\"right\" style=\"padding:0 0 0 10px\"><span id='date'\n" +
        "                                                style=\"margin:0;color:#4c4c4c;white-space:normal;display:inline-block;text-decoration:none;font-size:12px;line-height:20px\"></p></span>\n" +
        "                                        </td>\n" +
        "                                        <td width=\"1\">&nbsp;</td>\n" +
        "                                    </tr>\n" +
        "                                    </tbody>\n" +
        "                                </table>\n" +
        "                            </td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td align=\"left\">\n" +
        "                                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                       style=\"font-weight:200;font-family:Helvetica,Arial,sans-serif\" width=\"100%\">\n" +
        "                                    <tbody>\n" +
        "                                    <tr>\n" +
        "                                        <td width=\"100%\">\n" +
        "                                            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                                   style=\"font-weight:200;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                                                   width=\"100%\">\n" +
        "                                                <tbody>\n" +
        "                                                <tr>\n" +
        "                                                    <td align=\"center\" bgcolor=\"#8BC34A\"\n" +
        "                                                        style=\"padding:20px 48px;color:#ffffff\" class=\"banner-color\">\n" +
        "                                                        <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                                               style=\"font-weight:200;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                                                               width=\"100%\">\n" +
        "                                                            <tbody>\n" +
        "                                                            <tr>\n" +
        "                                                                <td align=\"center\" width=\"100%\">\n" +
        "                                                                    <h1 style=\"padding:0;margin:0;color:#ffffff;font-weight:500;font-size:20px;line-height:24px\">\n" +
        "                                                                        Email activation message [TipaHabr]</h1>\n" +
        "                                                                </td>\n" +
        "                                                            </tr>\n" +
        "                                                            </tbody>\n" +
        "                                                        </table>\n" +
        "                                                    </td>\n" +
        "                                                </tr>\n" +
        "                                                <tr>\n" +
        "                                                    <td align=\"center\" style=\"padding:20px 0 10px 0\">\n" +
        "                                                        <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                                               style=\"font-weight:200;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                                                               width=\"100%\">\n" +
        "                                                            <tbody>\n" +
        "                                                            <tr>\n" +
        "                                                                <td align=\"center\" width=\"100%\"\n" +
        "                                                                    style=\"padding: 0 15px;text-align: justify;color: rgb(76, 76, 76);font-size: 12px;line-height: 18px;\">\n" +
        "                                                                    <h3 style=\"font-weight: 600; padding: 0px; margin: 0px; font-size: 16px; line-height: 24px; text-align: center;\"\n" +
        "                                                                        class=\"title-color\">Hi," + user.firstName + " " + user.secondName + "</h3>\n" +
        "                                                                    <p style=\"margin: 20px 0 30px 0;font-size: 15px;text-align: center;\">\n" +
        "                                                                        This message sent to you for activation your account in TipaHabr service. We send this message once, so <b>activate now</b>!</p>\n" +
        "                                                                    <div style=\"font-weight: 200; text-align: center; margin: 25px;\">\n" +
        "                                                                        <a style=\"padding:0.6em 1em;border-radius:600px;color:#ffffff;font-size:14px;text-decoration:none;font-weight:bold\"\n" +
        "                                                                           class=\"button-color\" href='http://localhost:3000/users/activate?activationCode=" + user.activationCode + "'>Activate this now</a>\n" +
        "                                                                    </div>\n" +
        "                                                                </td>\n" +
        "                                                            </tr>\n" +
        "                                                            </tbody>\n" +
        "                                                        </table>\n" +
        "                                                    </td>\n" +
        "                                                </tr>\n" +
        "                                                <tr>\n" +
        "                                                </tr>\n" +
        "                                                <tr>\n" +
        "                                                </tr>\n" +
        "                                                </tbody>\n" +
        "                                            </table>\n" +
        "                                        </td>\n" +
        "                                    </tr>\n" +
        "                                    </tbody>\n" +
        "                                </table>\n" +
        "                            </td>\n" +
        "                        </tr>\n" +
        "                        <tr>\n" +
        "                            <td align=\"left\">\n" +
        "                                <table bgcolor=\"#FFFFFF\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                       style=\"padding:0 24px;color:#999999;font-weight:200;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                                       width=\"100%\">\n" +
        "                                    <tbody>\n" +
        "                                    <tr>\n" +
        "                                        <td align=\"center\" width=\"100%\">\n" +
        "                                            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                                   style=\"font-weight:200;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                                                   width=\"100%\">\n" +
        "                                                <tbody>\n" +
        "                                                <tr>\n" +
        "                                                    <td align=\"center\" valign=\"middle\" width=\"100%\"\n" +
        "                                                        style=\"border-top:1px solid #d9d9d9;padding:12px 0px 20px 0px;text-align:center;color:#4c4c4c;font-weight:200;font-size:12px;line-height:18px\">\n" +
        "                                                        Regards,\n" +
        "                                                        <br><b>The TipaHabr Team</b>\n" +
        "                                                    </td>\n" +
        "                                                </tr>\n" +
        "                                                </tbody>\n" +
        "                                            </table>\n" +
        "                                        </td>\n" +
        "                                    </tr>\n" +
        "                                    <tr>\n" +
        "                                        <td align=\"center\" width=\"100%\">\n" +
        "                                            <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\n" +
        "                                                   style=\"font-weight:200;font-family:Helvetica,Arial,sans-serif\"\n" +
        "                                                   width=\"100%\">\n" +
        "                                                <tbody>\n" +
        "                                                <tr>\n" +
        "                                                    <td align=\"center\" style=\"padding:0 0 8px 0\" width=\"100%\"></td>\n" +
        "                                                </tr>\n" +
        "                                                </tbody>\n" +
        "                                            </table>\n" +
        "                                        </td>\n" +
        "                                    </tr>\n" +
        "                                    </tbody>\n" +
        "                                </table>\n" +
        "                            </td>\n" +
        "                        </tr>\n" +
        "                        </tbody>\n" +
        "                    </table>\n" +
        "                </center>\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "        </tbody>\n" +
        "    </table>\n" +
        "</div>\n" +
        "<script>document.getElementById('date').innerHTML += Date.now().toString()</script>" +
        "</body>\n" +
        "</html>"
};