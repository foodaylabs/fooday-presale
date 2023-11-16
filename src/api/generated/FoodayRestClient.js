"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodayRestClient = void 0;
const FetchHttpRequest_1 = require("./core/FetchHttpRequest");
const AdminService_1 = require("./services/AdminService");
const ChallengeService_1 = require("./services/ChallengeService");
const CommentService_1 = require("./services/CommentService");
const FoocaService_1 = require("./services/FoocaService");
const IapService_1 = require("./services/IapService");
const InvitationsService_1 = require("./services/InvitationsService");
const MarketplaceService_1 = require("./services/MarketplaceService");
const MediaService_1 = require("./services/MediaService");
const MetaService_1 = require("./services/MetaService");
const MissionService_1 = require("./services/MissionService");
const NotificationService_1 = require("./services/NotificationService");
const PresaleService_1 = require("./services/PresaleService");
const ReviewService_1 = require("./services/ReviewService");
const SpotService_1 = require("./services/SpotService");
const UserService_1 = require("./services/UserService");
const WalletService_1 = require("./services/WalletService");
class FoodayRestClient {
    constructor(config, HttpRequest = FetchHttpRequest_1.FetchHttpRequest) {
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
        this.admin = new AdminService_1.AdminService(this.request);
        this.challenge = new ChallengeService_1.ChallengeService(this.request);
        this.comment = new CommentService_1.CommentService(this.request);
        this.fooca = new FoocaService_1.FoocaService(this.request);
        this.iap = new IapService_1.IapService(this.request);
        this.invitations = new InvitationsService_1.InvitationsService(this.request);
        this.marketplace = new MarketplaceService_1.MarketplaceService(this.request);
        this.media = new MediaService_1.MediaService(this.request);
        this.meta = new MetaService_1.MetaService(this.request);
        this.mission = new MissionService_1.MissionService(this.request);
        this.notification = new NotificationService_1.NotificationService(this.request);
        this.presale = new PresaleService_1.PresaleService(this.request);
        this.review = new ReviewService_1.ReviewService(this.request);
        this.spot = new SpotService_1.SpotService(this.request);
        this.user = new UserService_1.UserService(this.request);
        this.wallet = new WalletService_1.WalletService(this.request);
    }
}
exports.FoodayRestClient = FoodayRestClient;
