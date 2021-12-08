// declare module ListOfArticles {

  export interface LinkFlairRichtext {
    e: string;
    t: string;
  }

  export interface MediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
  }

  export interface RedditVideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
  }

  export interface Oembed {
    provider_url: string;
    description: string;
    title: string;
    type: string;
    thumbnail_width: number;
    height: number;
    width: number;
    html: string;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
  }

  export interface SecureMedia {
    reddit_video: RedditVideo;
    type: string;
    oembed: Oembed;
  }

  export interface SecureMediaEmbed {
    content: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url: string;
    height?: number;
  }

  export interface AuthorFlairRichtext {
    e: string;
    t: string;
  }

  export interface Gildings {
    gid_1?: number;
  }

  export interface Source {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution {
    url: string;
    width: number;
    height: number;
  }

  export interface Source2 {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution2 {
    url: string;
    width: number;
    height: number;
  }

  export interface Obfuscated {
    source: Source2;
    resolutions: Resolution2[];
  }

  export interface Source3 {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution3 {
    url: string;
    width: number;
    height: number;
  }

  export interface Nsfw {
    source: Source3;
    resolutions: Resolution3[];
  }

  export interface Variants {
    obfuscated: Obfuscated;
    nsfw: Nsfw;
  }

  export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
  }

  export interface Preview {
    images: Image[];
    enabled: boolean;
  }

  export interface ResizedIcon {
    url: string;
    width: number;
    height: number;
  }

  export interface ResizedStaticIcon {
    url: string;
    width: number;
    height: number;
  }

  export interface AllAwarding {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon[];
    icon_format: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
  }

  export interface RedditVideo2 {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
  }

  export interface Oembed2 {
    provider_url: string;
    description: string;
    title: string;
    type: string;
    thumbnail_width: number;
    height: number;
    width: number;
    html: string;
    version: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
  }

  export interface Media {
    reddit_video: RedditVideo2;
    type: string;
    oembed: Oembed2;
  }

  export interface P {
    y: number;
    x: number;
    u: string;
  }

  export interface S {
    y: number;
    x: number;
    u: string;
  }

  export interface MediaEmbed2 {
  }

  export interface SecureMediaEmbed2 {
  }

  export interface Gildings2 {
    gid_1: number;
  }

  export interface Source4 {
    url: string;
    width: number;
    height: number;
  }

  export interface Resolution4 {
    url: string;
    width: number;
    height: number;
  }

  export interface Variants2 {
  }

  export interface Image2 {
    source: Source4;
    resolutions: Resolution4[];
    variants: Variants2;
    id: string;
  }

  export interface Preview2 {
    images: Image2[];
    enabled: boolean;
  }

  export interface ResizedIcon2 {
    url: string;
    width: number;
    height: number;
  }

  export interface ResizedStaticIcon2 {
    url: string;
    width: number;
    height: number;
  }

  export interface AllAwarding2 {
    giver_coin_reward?: any;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: any;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: ResizedIcon2[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: ResizedStaticIcon2[];
    icon_format?: any;
    icon_height: number;
    penny_price?: any;
    award_type: string;
    static_icon_url: string;
  }

  export interface CrosspostParentList {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: any;
    downs: number;
    thumbnail_height: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: any;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed2;
    thumbnail_width: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: any;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed2;
    link_flair_text?: any;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext: any[];
    gildings: Gildings2;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    url_overridden_by_dest: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview2;
    all_awardings: AllAwarding2[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: any;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media?: any;
    is_video: boolean;
  }

  export interface Data2 {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: LinkFlairRichtext[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height?: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: MediaEmbed;
    thumbnail_width?: number;
    author_flair_template_id: string;
    is_original_content: boolean;
    user_reports: any[];
    secure_media: SecureMedia;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: SecureMediaEmbed;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    is_created_from_ads_ui: boolean;
    author_premium: boolean;
    thumbnail: string;
    edited: any;
    author_flair_css_class: string;
    author_flair_richtext: AuthorFlairRichtext[];
    gildings: Gildings;
    post_hint: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html: string;
    likes?: any;
    suggested_sort: string;
    banned_at_utc?: any;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview: Preview;
    all_awardings: AllAwarding[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text: string;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media: Media;
    is_video: boolean;
    url_overridden_by_dest: string;
    media_metadata: any;
    link_flair_template_id: string;
    crosspost_parent_list: CrosspostParentList[];
    crosspost_parent: string;
  }

  export interface Child {
    kind: string;
    data: Data2;
  }

  export interface Data {
    after: string;
    dist: number;
    modhash: string;
    geo_filter?: any;
    children: Child[];
    before?: any;
  }

  export interface RootObject {
    kind: string;
    data: Data;
  }
// }

// export const ListOfArticles;

