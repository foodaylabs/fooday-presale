import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AdminService } from './services/AdminService';
import { ChallengeService } from './services/ChallengeService';
import { CommentService } from './services/CommentService';
import { FoocaService } from './services/FoocaService';
import { IapService } from './services/IapService';
import { InvitationsService } from './services/InvitationsService';
import { MarketplaceService } from './services/MarketplaceService';
import { MediaService } from './services/MediaService';
import { MetaService } from './services/MetaService';
import { MissionService } from './services/MissionService';
import { NotificationService } from './services/NotificationService';
import { PresaleService } from './services/PresaleService';
import { ReviewService } from './services/ReviewService';
import { SpotService } from './services/SpotService';
import { UserService } from './services/UserService';
import { WalletService } from './services/WalletService';
export class FoodayRestClient {
    constructor(config, HttpRequest = FetchHttpRequest) {
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : 'http://localhost:3001',
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : '1.0.0',
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : 'include',
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH,
        });
        this.admin = new AdminService(this.request);
        this.challenge = new ChallengeService(this.request);
        this.comment = new CommentService(this.request);
        this.fooca = new FoocaService(this.request);
        this.iap = new IapService(this.request);
        this.invitations = new InvitationsService(this.request);
        this.marketplace = new MarketplaceService(this.request);
        this.media = new MediaService(this.request);
        this.meta = new MetaService(this.request);
        this.mission = new MissionService(this.request);
        this.notification = new NotificationService(this.request);
        this.presale = new PresaleService(this.request);
        this.review = new ReviewService(this.request);
        this.spot = new SpotService(this.request);
        this.user = new UserService(this.request);
        this.wallet = new WalletService(this.request);
    }
}
