--- 
layout: post
title: "How to Host Your Static Website on Amazon S3: Step-by-Step Guide"
date: 2013-04-01 22:29:50 -0400
category: code
---

1. Login to your Amazon AWS account
![](https://www.evernote.com/shard/s2/sh/fe218193-b3e8-4918-93b0-696b7fac20be/813409d91dd917802a19d7fef62a951c/deep/0/Screenshot%204/1/13%2010:11%20PM.jpg)

2. Create a new hosted zone for your domain using Route 53
![](https://www.evernote.com/shard/s2/sh/89e14f20-2cba-4525-b85e-21c1a4176076/43c26e6883639de8987cc0c2ea7106a4/deep/0/Screenshot%204/1/13%2010:12%20PM.jpg)

3. Copy the NS records for this zone to your domain provider (e.g., GoDaddy)
![](https://www.evernote.com/shard/s2/sh/d6387a2e-a5ad-41c5-8784-0c4a52a993d1/9ed257782f4ceed13e79126b543baa14/deep/0/Screenshot%204/1/13%2010:13%20PM.jpg)

4. Edit your domain on your domain registrar (e.g., GoDaddy) by clicking Set Nameservers
![](https://www.evernote.com/shard/s2/sh/7518fecb-d412-4b37-b9ce-62022add2da3/cc511c4fd3baac9121e589a9f66e2bbc/deep/0/Screenshot%204/1/13%2010:14%20PM.jpg)

5. Create a new Amazon S3 bucket for your website
![](https://www.evernote.com/shard/s2/sh/0e7f5227-0c83-41a9-ba49-a7f8c771677a/832667f5ccb17c6bbee2e9aed27479d0/deep/0/Screenshot%204/1/13%2010:16%20PM.jpg)

6. Edit the bucket policy
![](https://www.evernote.com/shard/s2/sh/19452899-abe8-407e-b29d-2a0b174ea117/e2be57fe0609cb9794253db363214df0/deep/0/Screenshot%204/1/13%2010:20%20PM.jpg)

7. Paste in this policy, making sure to update for your domain
{% highlight js %}
{
	"Version": "2008-10-17",
	"Statement": [
		{
			"Sid": "AddPerm",
			"Effect": "Allow",
			"Principal": {
				"AWS": "*"
			},
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::serbinskipromise.com/*"
		}
	]
}
{% endhighlight %}![](https://www.evernote.com/shard/s2/sh/2e597ac8-453d-4cec-b2a0-2e3f81017617/3f430748cf1ec69f8d2b58412416414f/deep/0/Screenshot%204/1/13%2010:20%20PM.jpg)

8. Enable website hosting for this S3 bucket
![](https://www.evernote.com/shard/s2/sh/2bec97a1-c4ae-4444-881f-607bd1cc2519/61803186386cfbd228c84d7d5cce80c1/deep/0/Screenshot%204/1/13%2010:21%20PM.jpg)

9. Create a record set for this new bucket: Set type A-record, Alias true and select the bucket you created before
![](https://www.evernote.com/shard/s2/sh/60493b19-1b3e-4c32-89b3-11dadef12c4d/0fdbaca5bcb2873ed8b760c8d48417eb/deep/0/Screenshot%204/1/13%2010:25%20PM.jpg)

10. _(optionally)_ Setup another bucket to redirect www.* requests to a clean URL (or vice versa to maintain www.*)
![](https://www.evernote.com/shard/s2/sh/5523bf6f-f0c6-42bd-a2b9-7ab7702dc90e/750d3026d483a136fcaf80be9729d1b2/deep/0/Screenshot%204/1/13%2010:22%20PM.jpg)

11. Redirect requests to this new bucket to your main domain
![](https://www.evernote.com/shard/s2/sh/01f6f11c-3c70-4d9c-befc-9e50f66f7182/6ca22a582ed83b683b5b9183ed06d7ce/deep/0/Screenshot%204/1/13%2010:22%20PM.jpg)

12. Create a record set for this new bucket
![](https://www.evernote.com/shard/s2/sh/60493b19-1b3e-4c32-89b3-11dadef12c4d/0fdbaca5bcb2873ed8b760c8d48417eb/deep/0/Screenshot%204/1/13%2010:25%20PM.jpg)

13. Upload content and enjoy! <a href="http://serbinskipromise.com">Serbinski Promise&trade;</a> 