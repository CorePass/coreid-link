import React from "react";
import { ImageResponse } from "@cloudflare/pages-plugin-vercel-og/api";
import vercelOGPagesPlugin from "@cloudflare/pages-plugin-vercel-og";

interface Props {
	ogTitle: string;
	ogSubtitle: string;
}

export const onRequest = vercelOGPagesPlugin<Props>({
	imagePathSuffix: "/og-image-coreid.png",
	component: ({ ogTitle, ogSubtitle }) => {
		let backgroundColor: string;
		let color: string;

		switch (ogTitle) {
			case "Connect to Core ID via CorePass":
				backgroundColor = "#61A5FA";
				color = "#1C3B8B";
				break;
			case "Missing Core ID":
				backgroundColor = "#FB943C";
				color = "#7D2E12";
				break;
			case "Invalid Core ID":
				backgroundColor = "#F77170";
				color = "#7F1E1D";
				break;
			default:
				backgroundColor = "#61A5FA";
				color = "#1C3B8B";
		}

		return new ImageResponse(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor,
					color,
					fontSize: 40,
					fontWeight: 600,
				}}
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<img
						style={{ width: "72px", height: "72px" }}
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjcyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNzIiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI3MiIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNzIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDUtMDlUMTg6MTQ6MDMrMDI6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDUtMDlUMTg6MTQ6MDMrMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC44IgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTA1LTA5VDE4OjE0OjAzKzAyOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz7Zu4tOAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc9LAkEUxz9a0g8Ngzp06CBRnSrKQOoSpIQFEmEGWV1029VAbdk1QroGXYOCqEu/DvUX1DXoHARFEUTnzkVdSra3KSiRb3jzPvOdeY+ZN+CMZZSsWT8I2VzeiIaDvvn4gq/hFRdNtOImkFBMfXxmJkJN+3zAYce7frtW7XP/mntZNRVwNAqPKbqRF54UjqzndZt3hduVdGJZ+Fy4z5ALCt/berLErzanSvxtsxGLhsDZKuxLVXGyipW0kRWWl9Odzawp5fvYL/GoublZiV3inZhECRPExxQThAgwxKjMAfrxMyArauQP/uZPsyq5isw6BQxWSJEmT5+oa1JdlaiJrsrIULD7/7evpjbsL1X3BMH1YlnvPdCwA8Vty/o6tqziCdQ9w1Wukr96BCMfom9XtO5D8G7CxXVFS+7B5RZ0POkJI/Er1Yk7NQ3ezqAlDm230LxY6ll5n9NHiG3IV93A/gH0ynnv0g9M/2fa3xBbsQAAAAlwSFlzAAALEwAACxMBAJqcGAAACyZJREFUeJzNnHm0l0UZxz/3BoKpMEUlhiKDuO+7WCpmimXiXpq4naNjLqjH3C33pdxAy20SFS3qtJjmgkQpah6XEnMlUBwXShGhEQ30Xry3P565eH3vzLv8Fi7fc37nnvO8M8/M/b6zPcu8LawAUMa1Av2Bft3+9gM+B7SEYh3AJ0A78DGwBFjsrf64mX1rKS7SHCjjNgT2Br4DjAT61KhqPvA3YBpwr7d6bmN6KFiuBCnjNgKOQYhZpwlNdAJPAHcAk73VH9SrcLkQpIzbATgbIWZ5vZSFwI+Am73VHbUqaWpnlXG7A+cCuzSznQI8C4zzVj9eS+WmEaSMOwu4vA4ViwAPtAGrAoOAvnXoO8VbfW3VSk0hSBm3CfAc0FqieBvwJLLQzgBeBpy3+qOI3gEIUWsAmwHbA6OAYSXa6QTGeqsnlyi7DM0iaE9gSk6RNuBe4DfAg97qD+tsb33gAOBwYP2cou3A3t7qqWV1N4ug4cCLwMqZR+8B1yEL57tNantX4BJgx0SRD4Bh3uqFZfSVmQKV4a1+DTgB2UkA3gcuALS3+uJmkRPafhjYCbgpUWQ14KSy+pq9i/UBNgRmequXNrOtRPsXAudFHi0E1i4ztesiSBk30Fv9fj06IjqHAhshJ+vWzK8FmOWtfr6CvseJT7fTvNVXF9WviSBl3OrAZGBXYDZwlbf6lhp1rQZ8A9gd2ANYt0S1txHTYiowzVs9P0f/KODhyKNp3uo9ihqqTJAyri+yJW/XTdwBjPBWuwp61gXOB75H7XYYyPb9LHCdt3pSoq2n+Gx/Ad7wVg8rUl7LIn1ppLFW4LAylZVxayvjbgVmAodSHzkgL3kr4DZl3DGJMi9FZGsp4/oXKa9EkDJuNHBa4nHuuqCM66eMm4BMyaMQV0Yj0QJcpYyLzYrXIrJWYESR0tJvL6w7k4hPy9eBB3LqrgH8ETn5NhMp693XqrDK8L4KWD0i7wCO8Fa3xSop47YB7gaGlGjjLeAx4FHgBWQ7Xog4z9YE1kLMij0QAzjb/1u91Z0RvdtGZO3ArKIOlSJIGbcx8P3E4wne6kcT9fYBfk3PE3V3tIUy473Vz+WUewvx9QBcoYz7IuI+2Rb5P2Z4q22i7tcislne6vac9oDyI+hC4uvVS8A5sQrKuK3JJ6cT+Blwubf6nZL9WIZgKkwKvyRCP2LOuRfLtFNIkDJuC2D/yKN24PCYT1gZNxiZVily5iLT8qEynawVYZe6M/H4H2V0lNnFLiS+MF/trZ4R6VQ/hJw1E/ruATZrNjkBP0VMnSzmA78ooyB3BCnjhiBO9SwWhcZjuIL0bnUfcGCRXRa2ao34fb4MfISMutfL2E/KOAVcCRydKHKRt3pRkR4onmLfJT7KbvJW99g6g1P+xISu6cBBeeQo47YCxiEv5UuRIkuVcY8gR4bpiBHc0a2+AvYErkHIjeEV4OZUH7IoIuiQiKwDuD5R/gLihM4ExsS8hLAsBDQB2b7z0AfYLfwAPlTGzQAWAFsgoy4PHcAPy+xeXUjaYsq4dYBXI4+me6t3jZTfHLGJsjrbgR1i61WoNxZZDwqP/XWiDTjMW/3bKpXyRtBBCXnKlXomccJvyyHnJGTkNDsU9AGwn7f6r1Ur5u1iuyXkPQhSxq0MjImU7UBO4D2gjDsKuJbmk/MGMKoWciB/BG0akc31Vr8QkX8bWCUiv8db/UpWqIxbi/Q6BrAYcehPR3w/Q5CdcXtgc8oZuo8jL+Aub/UnJcpHESVIGbcScbvrwYSe1HS8MiG/iPQh8jbgdG/1gox8UujbAMR02Bmxx0Yg55p3gXnAv5Gw8zMJ/ZWQGkExckDiVjHsHJHN81Y/kRWGmNnhCT2ne6ujU7IL4fwyhfywUsOQWoNSBPXInFDGrUL8zJE6yh+XaPeOInJ6A3UTBAxPlP17Qh5zoC8BzkqU71WkCPpKQv5WRFaaoLC2bRwpe7e3+u2Enl5FFYI+8la/F5GnTq+xQ+bGxBMQHkvo6HWkCIpti1WTkf4Xka2WKLtCjh5IExSzmFP/XIq42CjMbt1dGJyQ9zqqENQ/7FhZpNwGsSyLVMJAzGezQiBFUGpUDKpQNkbQfOC/Efn+ISC5wqHKCII4QalMjR4EBV/Q7ZGyawJjE3p6FVVHUMz5/TzxaZZKZLoJcdhnMV4ZVxgrX95IEZQKtI3sUVBGRcxS3lQZ99VI+dlAzB89ELhfGfeDRNu9gpQt9hqyTWcX5R4EBUwF9svI+gKnAGdEyt9A3J3SB7gxhGrGe6tf7noQ4mAHIxGWEYixe6a3+vZEnxqCPI/iA8C3MuKPgQHZKKoybhgQy+xYBAyN5RAp464Hji/o3wI+fVEDib/QzavkC1VFnsPszxFZP+DrWaG3+nXiGRQDgNSUOZFi5/kgYGj4mxrt+xboqAt5BE1LyI9IyH+SkJ8cYmWfQYihH0fJ+FQO5tRZPxdJgrzVLwH/iTw6MGSFZTGZ+ChaAxifaKMTOBZxrEWTHwowDfh9DfVKoyiy+peI7PNIVthnEOJTsYRJgOOUcefGHnirO73VZwDrAbcAZZI9ZyNTdEyvXodSxo1BQsVZzAC2iaWaKOOeQTK+YjjaWz2xoM2BiM9op6CnL+L8nw88jWTlP5VIc2k4ighqAf6JpP1ncWgsrV8ZNxJxX8Qc658A+3qr76uhr72CwpCLMu4A4vP8TWD9xJ2KU4FUim0bEr+/pNHTIxxML0NC5ouAU6vezciiTHbHXUi2VxZDkYNgD3irryERDwNWQu5xPa+Ma8g1KWVcawhC/gvZZVdG3MYTQ/pOzSgkKMz1ixOPz1XGrZd4dgZy8y+F9YCHlXETQ/5jZSjj+oZ18mkkBpbdXfsTz20qjVJRzbAWvUDcn/wisL23enGkXh/gD8Sjrt3RBtzPp6P1VW91zCPZlae9JZJCfAiSHpOHo+oxR0qHfXPWIoA7vdXRWFe40XwOkvlRJfV3HnIInBP6+QXE87gJcqIvg7nAdvUEBCrFxZVxf0ISJ2MY563+eU7dnZCcxTLZrvWiE4nQnl3vzaKqBK2O+H9i/uZO4ARv9Y059Qcha8XBND6RvAtPAid5q1NxuUqolGnvrZ6HXDmI3SJuAW5Qxp2cU3+Bt3ossAFig9ViXqTwDnAksGMZchIZ+T1Q622f05GzTAo/Bi4tOu2Gc8s4YC9kbanaH4fE6B8AHvJWLylobzCSx7QvYjJdnLcsUEOHujd2A2KNp/Agkupbag0I028X5JLudogPqPs9sVZk5M5BjNQp3urCTPlu+kcjx47s8jA4zIwo6iGoFfEMHptT7B0klzrlOmk6Qrj7IuRcFvt/9/JWJ++Z1J3dpYw7Hll4Uw6tTuCXwPlV7pM1AiEIMIH8uNsO3uqnUg8bkv4Wbhr/jnhYqAttyMJ8SS1XDyr2ZyQyar5ZUPQ5YMu8tbJh+YHKOI24RmKpe92xGLkecKu3+ukGtr8qcnf+WNLBhe6Ygkz/WELGMjQ0gTJ08k7K+4nfQPIQH0HSiytNwXCtcxQSXBiN7ExFWIp8T+TKMj6lhmeYhvPFeYh5sVLF6m8iaTPzuv0WIOvYKsgUHoKEfTZFzI8qmA0cGUsNTKGZHzcZipyHjqT+e6n14k3kbsnEqj6opn/LJ2Tsn49Y30350kMO5iDRlklVrh90x3L7ApUybgMkD3EM1adGVcxEiPlVPTnS0AvfMAs+op0Rovah3KdtirAEWeinIF+Tmd0AnUAvfuStC8q4zZBdaGvkkxTDyb/j2oks3rOQ6MpU4JHUTaJ60esExRBGWR96fiZwKdC+vEI+AP8Hkrxy11wolG4AAAAASUVORK5CYII="
						alt="CorePass"
					/>
					<div style={{ fontSize: 50, color: "#fff", letterSpacing: -3 }}>CorePass</div>
				</div>
				<div style={{ marginTop: 40 }}>{ogTitle}</div>
				<div style={{ marginTop: 20, fontSize: 30, fontWeight: 400, letterSpacing: 2.5 }}>
					{ogSubtitle}
				</div>
			</div>,
			{
				width: 1200,
				height: 630,
			}
		);
	},
	extractors: {
		on: {
			'meta[property="og:title"]': (props) => ({
				element(element: Element) {
					props.ogTitle = element.getAttribute("content") || "";
				},
			}),
			'meta[property="og:description"]': (props) => ({
				element(element: Element) {
					props.ogSubtitle = element.getAttribute("content") || "";
				},
			}),
		},
	},
	autoInject: {
		openGraph: true,
	},
});
