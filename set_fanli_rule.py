import requests
import re,time

cookies = {
		'PHPSESSID': '9fpa5s479bpmu9dtackhn3aif5'
}

def get_rebate_plan():
	url = 'http://admin-data.kokoyou.com/reb/reb_list/index.html'
	data = {
		'page': '1',
		'limit': '100',
		'game_id': '300'
	}
	

	res = requests.post(url, data=data, cookies=cookies)
	return res.json()['data']


def add_rebate_plan(plan, multi):
	"""
	添加返利规则
	param plan: 返利规则
	param multi: 返利倍数
	"""
	title = plan['mail_title']
	num_match = re.search(r'(?P<num>[0-9]*)', title)
	num = int(num_match.group('num'))
	data = {
		'title': title,
		'game_id': 353,
		'sup_id': 399,
		'product_num': num * multi,
		'mail_title': title,
		'mail_content': plan['mail_content'],
		'msg': plan['msg']
	}
	url = 'http://admin-data.kokoyou.com/reb/reb_list/add_post.html'
	res = requests.post(url, data, cookies=cookies)
	try:
		result =  res.json()
		print('%s  %s' % (title, result['msg']))
	except:
		print('%s  %s' % (title, res.text)

if __name__ == '__main__':		
for plan in get_rebate_plan():
	add_rebate_plan(plan, 50)
	time.sleep(3)