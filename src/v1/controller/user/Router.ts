import { ControllerClass } from "../../../abstract/controller";
import { Rename } from "./rename";
import { SendMessage } from "./binding/platform/phone/SendMessage";
import { BindingPhone } from "./binding/platform/phone/Binding";
import { DeleteAccountValidate } from "./deleteAccount/Validate";
import { DeleteAccount } from "./deleteAccount";
import { UploadAvatarStart } from "./uploadAvatar/Start";
import { UploadAvatarFinish } from "./uploadAvatar/Finish";
import { BindingWeChatMobile, BindingWeChatWeb } from "./binding/platform/wechat/Binding";
import { SetAuthUUID } from "./binding/SetAuthUUID";
import { BindingProcess } from "./binding/Process";
import { BindingList } from "./binding/List";
import { RemoveBinding } from "./binding/Remove";
import { BindingAgora } from "./binding/platform/agora/Binding";
import { BindingGithub } from "./binding/platform/github/Binding";
import { BindingGoogle } from "./binding/platform/google/Binding";

export const userRouters: Readonly<Array<ControllerClass<any, any>>> = Object.freeze([
    Rename,
    SendMessage,
    BindingPhone,
    BindingWeChatWeb,
    BindingWeChatMobile,
    BindingGithub,
    BindingAgora,
    BindingGoogle,
    SetAuthUUID,
    BindingProcess,
    BindingList,
    RemoveBinding,
    DeleteAccountValidate,
    DeleteAccount,
    UploadAvatarStart,
    UploadAvatarFinish,
]);
