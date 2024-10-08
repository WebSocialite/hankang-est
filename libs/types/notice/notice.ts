import { BoardArticleCategory, BoardArticleStatus } from '../../enums/board-article.enum';
import { NoticeStatus, NoticeType } from '../../enums/notice.enum';
import { Member } from '../member/member';
import { MeLiked, TotalCounter } from '../property/property';

export interface Notice {
	_id: string;
	noticeType: NoticeType;
	noticeContent: string;
	noticeStatus: NoticeStatus;
	createdAt: Date;
	updatedAt: Date;
	/** from aggregation **/
	memberData?: Member;
}

export interface Notices {
	list: Notice[];
	metaCounter: TotalCounter[];
}